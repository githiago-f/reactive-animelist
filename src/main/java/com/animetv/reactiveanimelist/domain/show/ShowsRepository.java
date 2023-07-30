package com.animetv.reactiveanimelist.domain.show;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.stereotype.Repository;

import com.animetv.reactiveanimelist.app.http.dto.ShowItem;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import reactor.core.publisher.Flux;

@Repository
public interface ShowsRepository extends ReactiveCrudRepository<Show, String> {
    @Query("SELECT s.slug, s.title, s.thumbnail, COUNT(e.id) episodes " +
            "FROM shows s " +
            "LEFT JOIN episodes e ON e.\"showSlug\" = s.slug " +
            "GROUP BY s.slug, s.title, s.thumbnail " +
            "LIMIT 10 OFFSET (:offset * 10)")
    Flux<ShowItem> findAll(Integer offset);
}
