package com.animetv.reactiveanimelist.domain.show;

import org.springframework.data.relational.core.mapping.Table;

@Table("episodes")
public record Episode(
    Integer id, 
    String showSlug,
    String title,
    Integer length,
    String thumbnail,
    Integer season
) {}
