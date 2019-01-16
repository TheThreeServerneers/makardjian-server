\c product_overview;

CREATE TABLE products (
	id bigserial PRIMARY KEY,
	product_title varchar(255) NOT NULL,
	vendor_name varchar(50) NOT NULL,
	review_average DECIMAL(2,1), 
	review_count int DEFAULT 0,
	answered_questions int, 
	list_price varchar(255) NOT NULL,
	discount varchar(4),
	price varchar(255) NOT NULL,
	prime bool NOT NULL,
	description text
);

CREATE TABLE photos (
	photo_id bigserial PRIMARY KEY,
	main_url varchar(255) NOT NULL,
	zoom_url varchar(255) NOT NULL,
	product_id int,
	main_photo bool NOT NULL,
	FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
