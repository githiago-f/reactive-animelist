package com.animetv.reactiveanimelist.domain.show;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("shows")
public record Show(
    @Id String slug,
    String title,
    String description,
    String thumbnail
) {}
