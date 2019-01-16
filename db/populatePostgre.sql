\copy products (id, product_title, vendor_name, review_average, review_count, answered_questions, list_price, price, prime, description) FROM './db/data.csv' DELIMITER E'\t'  CSV HEADER;

SELECT pg_catalog.setval(pg_get_serial_sequence('products', 'id'), MAX(id)) FROM products;

\copy photos (photo_id, main_photo, main_url, zoom_url, product_id) FROM './db/photos.csv' DELIMITER E'\t'  CSV HEADER;

SELECT pg_catalog.setval(pg_get_serial_sequence('photos', 'photo_id'), MAX(photo_id)) FROM photos;
