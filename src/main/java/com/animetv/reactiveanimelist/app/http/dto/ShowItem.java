package com.animetv.reactiveanimelist.app.http.dto;

public record ShowItem(
    String slug, 
    String title, 
    String thumbnail,
    String description,
    Integer episodes,
    Long length
) {}
