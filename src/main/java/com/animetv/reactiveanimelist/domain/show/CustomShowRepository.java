package com.animetv.reactiveanimelist.domain.show;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.stereotype.Repository;

import com.animetv.reactiveanimelist.app.http.dto.ShowView;

import reactor.core.publisher.Mono;

@Repository
public class CustomShowRepository {
    private final Logger logger = LoggerFactory.getLogger(getClass());
    private final DatabaseClient client;

    public CustomShowRepository(DatabaseClient client) {
        this.client = client;
    }
    
    public Mono<ShowView> findBySlug(String slug, Integer season) {
        final String SQL_STATEMENT = "SELECT " +
                "s.slug, s.title, s.thumbnail, s.description, " + 
                "(SELECT COUNT(id) FROM episodes WHERE \"showSlug\" = :slug) "+
                "\"totalEpisodes\", e.id \"episodeId\", "+
                "e.title \"episodeTitle\", e.length \"episodeLength\", " +
                "e.thumbnail \"episodeThumbnail\", e.season \"episodeSeason\" " +
            "FROM shows s " + 
            "LEFT JOIN episodes e ON e.\"showSlug\" = s.slug " +
            "WHERE s.slug = :slug AND e.season = :season";
        return client.sql(SQL_STATEMENT)
            .bind("slug", slug)
            .bind("season", season)
            .fetch().all()
            .bufferUntilChanged(i -> i.get("slug"))
            .map(ShowView::fromShowRowList)
            .single();
    }
}
