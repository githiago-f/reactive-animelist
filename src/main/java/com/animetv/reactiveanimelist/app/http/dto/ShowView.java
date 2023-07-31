package com.animetv.reactiveanimelist.app.http.dto;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import com.animetv.reactiveanimelist.domain.show.Episode;

public record ShowView(
    String slug, 
    String title, 
    String thumbnail, 
    String description,
    Integer totalEpisodes,
    Set<Episode> episodes
) {
    public static ShowView fromShowRowList(List<Map<String, Object>> rows) {
        Map<String, Object> row = rows.get(0);
        Set<Episode> episodes = rows.stream().map(i -> new Episode(
            (Integer) i.get("episodeId"), 
            (String) i.get("slug"),
            (String) i.get("episodeTitle"), 
            (Integer) i.get("episodeLength"), 
            (String) i.get("episodeThumbnail"),
            (Integer) i.get("episodeSeason")
        )).collect(Collectors.toSet());
        return new ShowView(
            (String) row.get("slug"), 
            (String) row.get("title"), 
            (String) row.get("thumbnail"),
            (String) row.get("description"),
            rows.size(), 
            episodes
        );
    }
}
