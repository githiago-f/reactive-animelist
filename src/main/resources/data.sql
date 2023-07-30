DELETE FROM episodes;
DELETE FROM shows;
INSERT INTO shows (slug, title, description, thumbnail) VALUES ('kimetsu-no-yaiba-demon-slayer', 'Kimetsu no yaiba: Demon slayer', '"Demon Slayer: Kimetsu no Yaiba" is a Japanese TV series that follows the story of Tanjiro Kamado, a teenage boy who sets out to become a demon slayer to avenge his family and cure his sister, Nezuko, who is turning into a demon.', 'https://upload.wikimedia.org/wikipedia/en/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg');
INSERT INTO shows (slug, title, description, thumbnail) VALUES ('jujutsu-kaisen', 'Jujutsu Kaisen', 'It follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host.', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Jujutsu_kaisen.jpg/220px-Jujutsu_kaisen.jpg');
INSERT INTO shows (slug, title, description, thumbnail) VALUES ('zom-100-bucket-list-of-the-dead', 'ZOM 100: Bucket list of the dead', 'A trama acompanha um jovem chamado Akira que mora num apartamento minúsculo e trabalha numa empresa que explora os seus funcionários. Sua vida muda, incrivelmente para melhor, quando um apocalipse zumbi surge em sua cidade e ele põe em prática seu objetivo de finalizar sua lista de 100 coisas para fazer antes de morrer.', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Zom_100_manga_vol._1.png/220px-Zom_100_manga_vol._1.png');

INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('zom-100-bucket-list-of-the-dead', 'Episode 1', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('zom-100-bucket-list-of-the-dead', 'Episode 2', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('zom-100-bucket-list-of-the-dead', 'Episode 3', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('zom-100-bucket-list-of-the-dead', 'Episode 4', 24 * 60, 'https://via.placeholder.com/300x300');

INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 1', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 2', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 3', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 4', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 5', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 6', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 7', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 8', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 9', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 10', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 11', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 12', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 13', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 14', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 15', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 16', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 17', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 18', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 19', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 20', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 21', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 22', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 23', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail) VALUES ('jujutsu-kaisen', 'Episode 24', 24 * 60, 'https://via.placeholder.com/300x300');
INSERT INTO episodes ("showSlug", title, "length", thumbnail, season) VALUES ('jujutsu-kaisen', 'Episode 25', 24 * 60, 'https://via.placeholder.com/300x300', 2);
INSERT INTO episodes ("showSlug", title, "length", thumbnail, season) VALUES ('jujutsu-kaisen', 'Episode 26', 24 * 60, 'https://via.placeholder.com/300x300', 2);
INSERT INTO episodes ("showSlug", title, "length", thumbnail, season) VALUES ('jujutsu-kaisen', 'Episode 27', 24 * 60, 'https://via.placeholder.com/300x300', 2);
INSERT INTO episodes ("showSlug", title, "length", thumbnail, season) VALUES ('jujutsu-kaisen', 'Episode 28', 24 * 60, 'https://via.placeholder.com/300x300', 2)
