create table if not exists shows (
    slug varchar(255) primary key,
    title varchar(255) NOT NULL,
    "description" text,
    "thumbnail" VARCHAR(255)
);
create table if not exists episodes (
    "id" serial,
    "showSlug" varchar(255),
    "title" varchar(255),
    "length" int,
    "thumbnail" varchar(255),
    "season" int DEFAULT 1,
    primary key("id", "showSlug"),
    foreign key("showSlug") references shows 
        on delete cascade
);
