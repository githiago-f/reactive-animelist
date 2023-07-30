package com.animetv.reactiveanimelist.app.http;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.animetv.reactiveanimelist.app.http.dto.ShowItem;
import com.animetv.reactiveanimelist.app.http.dto.ShowView;
import com.animetv.reactiveanimelist.domain.show.CustomShowRepository;
import com.animetv.reactiveanimelist.domain.show.ShowsRepository;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/shows")
public class ShowController {
    private final ShowsRepository showsRepository;
    private final CustomShowRepository customShowRepository;
    public ShowController(
        ShowsRepository showsRepository, 
        CustomShowRepository customShowRepository
    ) {
        this.showsRepository = showsRepository;
        this.customShowRepository = customShowRepository;
    }

    @GetMapping
    public Mono<ResponseEntity<List<ShowItem>>> listShows(
        @RequestParam(required = false) Optional<Integer> page) {
        return showsRepository.findAll(page.orElse(0))
            .collectList()
            .map(ResponseEntity.ok()::body)
            .defaultIfEmpty(ResponseEntity.noContent().build());
    }

    @GetMapping("{slug}")
    public Mono<ResponseEntity<ShowView>> findBySlug(
        @PathVariable String slug, 
        @RequestParam(required = false) Optional<Integer> season
    ) {
        return customShowRepository.findBySlug(slug, season.orElse(1))
            .map(ResponseEntity.ok()::body)
            .onErrorReturn(ResponseEntity.notFound().build());
    }
}
