\copy products (id, product_title, vendor_name, review_average, review_count, answered_questions, list_price, price, prime, description) FROM './db/data.csv' DELIMITER E'\t'  CSV HEADER;

\copy photos (photo_id, main_photo, main_url, zoom_url, product_id) FROM './db/photos.csv' DELIMITER E'\t'  CSV HEADER;