# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
BusinessCuisine.destroy_all
Business.destroy_all
Cuisine.destroy_all
User.destroy_all

require 'open-uri'

demo_user = User.create(
  email: "sasuke@ninja.com", 
  password: "demopass", 
  first_name: "Sasuke", 
  last_name: "Uchiha",
  zip_code: "93033"
)

u1 = User.create(
  email: "itachi@ninja.com", 
  password: "brother", 
  first_name: "Itachi", 
  last_name: "Uchiha",
  zip_code: "98574"
)

u2 = User.create(
  email: "kakashi@ninja.com", 
  password: "sharingan", 
  first_name: "Kakashi", 
  last_name: "Hatake",
  zip_code: "99933"
)

u3 = User.create(
  email: "naruto@ninja.com", 
  password: "ninetail", 
  first_name: "Naruto", 
  last_name: "Uzimaki",
  zip_code: "94567"
)

u4 = User.create(
  email: "sakura@ninja.com", 
  password: "blossoms", 
  first_name: "Sakura", 
  last_name: "Haruno",
  zip_code: "69999"
)

u5 = User.create(
  email: "shino@ninja.com", 
  password: "bugsarelife", 
  first_name: "Shino", 
  last_name: "Aburame",
  zip_code: "95673"
)

u6 = User.create(
  email: "rock@ninja.com", 
  password: "ilovegirls", 
  first_name: "Rock", 
  last_name: "Lee",
  zip_code: "91023"
)

u7 = User.create(
  email: "hinata@ninja.com", 
  password: "ilovenaruto", 
  first_name: "Hinata", 
  last_name: "Hyuga",
  zip_code: "95632"
)

b1 = Business.create(
  name: 'The Burning Sand',
  address: '998 Hot St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94121',
  url: 'racksofmeat.com',
  phone: '715-777-9999',
  price_range: 2,
  opening_hours: '9:30 AM - 11:00 PM',
  lat: 37.7795,
  long: -122.5016,
  owner_id: u2.id
)

b2 = Business.create(
  name: 'The Spicy Choji',
  address: '477 Pig St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94124',
  url: 'thebigguy.com',
  phone: '515-888-9999',
  price_range: 1,
  opening_hours: '10:30 AM - 10:00 PM',
  lat: 37.7367,
  long: -122.3854,
  owner_id: u2.id
)

b3 = Business.create(
  name: 'The Hidden Leaf',
  address: '990 Konoha St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94114',
  url: 'hiddenleaves.com',
  phone: '215-333-9999',
  price_range: 3,
  opening_hours: '4:30 PM - 11:00 PM',
  lat: 37.7537,
  long: -122.4376,
  owner_id: u3.id
)

b4 = Business.create(
  name: 'The Spinning Shuriken',
  address: '200 Sakura St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94116',
  url: 'pink200.com',
  phone: '335-111-9999',
  price_range: 1,
  opening_hours: '5:30 AM - 7:00 PM',
  lat: 37.7490,
  long: -122.4923,
  owner_id: u4.id
)

b5 = Business.create(
  name: 'Iruka Ramen',
  address: '343 Hokage St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94112',
  url: 'sensei123.com',
  phone: '115-773-9929',
  price_range: 3,
  opening_hours: '11:30 AM - 11:30 PM',
  lat: 37.7208,
  long: -122.4456,
  owner_id: u5.id
)

b6 = Business.create(
  name: 'The Chunin Exam',
  address: '99 Shabu St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94132',
  url: 'rocklee.com',
  phone: '555-999-9999',
  price_range: 2,
  opening_hours: '5:30 PM - 10:00 PM',
  lat: 37.7309,
  long: -122.4843,
  owner_id: u6.id
)

b7 = Business.create(
  name: 'The Hidden Mist',
  address: '99 Kisame St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94114',
  url: 'misty99.com',
  phone: '555-999-0931',
  price_range: 3,
  opening_hours: '2:30 PM - 10:00 PM',
  lat: 37.7587,
  long: -122.4302,
  owner_id: u7.id
)

b8 = Business.create(
  name: 'Fried Kimimaru',
  address: '2 Bone St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94158',
  url: 'orochimaru.com',
  phone: '515-919-9191',
  price_range: 1,
  opening_hours: '11:30 AM - 8:00 PM',
  lat: 37.7727,
  long: -122.3915,
  owner_id: u5.id
)

b9 = Business.create(
  name: 'Uchiha Udon',
  address: '99 Noodle St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94132',
  url: 'sharingan.com',
  phone: '585-900-9009',
  price_range: 2,
  opening_hours: '5:30 AM - 11:00 PM',
  lat: 37.7369,
  long: -122.4326,
  owner_id: u1.id
)

b10 = Business.create(
  name: 'Sweet Tsunade',
  address: '543 Noon St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94014',
  url: 'thefifth.com',
  phone: '123-999-9446',
  price_range: 1,
  opening_hours: '6:30 PM - 2:00 AM',
  lat: 37.7058,
  long: -122.4550,
  owner_id: u2.id
)

f1 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/bbq/bbq1.jpg')
f2 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/bbq/bbq2.jpg')
f3 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/bbq/bbq3.jpg')
f4 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/bbq/bbq4.jpg')
f5 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/bbq/bbq5.jpg')
f6 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/bbq/pork.jpg')
f7 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/bbq/wagyu.jpg')

f8 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/curry/curry.jpg')
f9 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/curry/curry1.jpg')
f10 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/curry/curry2.jpg')
f11 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/curry/curry3.jpg')
f12 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/curry/curry4.jpg')
f13 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/curry/curry5.jpg')
f14 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/curry/curry6.jpg')

f15 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fancy/akira.jpg')
f16 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fancy/fancy1.jpg')
f17 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fancy/fancy2.jpg')
f18 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fancy/fancy3.jpg')
f19 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fancy/fancy4.jpg')
f20 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fancy/fancy5.jpg')
f21 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fancy/izakaya.jpg')

f22 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fish/grilled-fish.jpg')
f23 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fish/hamachi.jpg')
f24 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fish/hotate.jpg')
f25 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fish/oyster.jpg')
f26 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fish/salmon.jpg')
f27 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fish/sashimi.jpg')

f28 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/ramen/appetizer.jpg')
f29 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/ramen/bone-marrow-ramen.jpg')
f30 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/ramen/gyoza.jpg')
f31 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/ramen/ramen1.jpg')
f32 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/ramen/ramen2.jpg')
f33 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/ramen/ramen3.jpg')
f34 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/ramen/ramen4.jpg')

f35 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/shabu/shabu.jpg')
f36 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/shabu/shabu1.jpg')
f37 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/shabu/shabu2.jpg')
f38 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/shabu/shabu3.jpg')
f39 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/shabu/shabu4.jpg')
f40 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/shabu/shabu5.jpg')

f41 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/sushi/sushi.jpg')
f42 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/sushi/sushi1.jpg')
f43 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/sushi/sushi2.jpg')
f44 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/sushi/sushi3.jpg')
f45 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/sushi/sushi4.jpg')
f46 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/sushi/sushi5.jpg')
f47 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/sushi/uni.jpg')

f48 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/tempura/oko.jpg')
f49 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/tempura/temp1.jpg')
f50 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/tempura/temp2.jpg')
f51 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/tempura/temp3.jpg')
f52 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/tempura/temp4.jpg')
f53 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/tempura/temp5.jpg')
f54 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/tempura/temp6.jpg')

f55 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/udon/udon1.jpg')
f56 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/udon/udon2.jpg')
f57 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/udon/udon3.jpg')
f58 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/udon/udon4.jpg')
f59 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/udon/udon5.jpg')
f60 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/udon/udon6.jpg')

f61 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/dessert/dessert1.jpg')
f62 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/dessert/dessert2.jpg')
f63 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/dessert/dessert3.jpg')
f64 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/dessert/dessert4.jpg')
f65 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/dessert/dessert5.jpg')
f66 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/dessert/dessert6.jpg')



b1.photos.attach(io: f1, filename: "bbq1.jpg")
b1.photos.attach(io: f2, filename: "bbq2.jpg")
b1.photos.attach(io: f3, filename: "bbq3.jpg")
b1.photos.attach(io: f4, filename: "bbq4.jpg")
b1.photos.attach(io: f5, filename: "bbq5.jpg")
b1.photos.attach(io: f6, filename: "pork.jpg")
b1.photos.attach(io: f7, filename: "wagyu.jpg")

b2.photos.attach(io: f8, filename: "curry.jpg")
b2.photos.attach(io: f9, filename: "curry1.jpg")
b2.photos.attach(io: f10, filename: "curry2.jpg")
b2.photos.attach(io: f11, filename: "curry3.jpg")
b2.photos.attach(io: f12, filename: "curry4.jpg")
b2.photos.attach(io: f13, filename: "curry5.jpg")
b2.photos.attach(io: f14, filename: "curry6.jpg")

b3.photos.attach(io: f15, filename: "akira.jpg")
b3.photos.attach(io: f16, filename: "fancy1.jpg")
b3.photos.attach(io: f17, filename: "fancy2.jpg")
b3.photos.attach(io: f18, filename: "fancy3.jpg")
b3.photos.attach(io: f19, filename: "fancy4.jpg")
b3.photos.attach(io: f20, filename: "fancy5.jpg")
b3.photos.attach(io: f21, filename: "izakaya.jpg")

b4.photos.attach(io: f22, filename: "grilled-fish.jpg")
b4.photos.attach(io: f23, filename: "hamachi.jpg")
b4.photos.attach(io: f24, filename: "hotate.jpg")
b4.photos.attach(io: f25, filename: "oyster.jpg")
b4.photos.attach(io: f26, filename: "salmon.jpg")
b4.photos.attach(io: f27, filename: "sashimi.jpg")

b5.photos.attach(io: f28, filename: "bone-marrow-ramen.jpg")
b5.photos.attach(io: f29, filename: "appetizer.jpg")
b5.photos.attach(io: f30, filename: "gyoza.jpg")
b5.photos.attach(io: f31, filename: "ramen1.jpg")
b5.photos.attach(io: f32, filename: "ramen2.jpg")
b5.photos.attach(io: f33, filename: "ramen3.jpg")
b5.photos.attach(io: f34, filename: "ramen4.jpg")

b6.photos.attach(io: f35, filename: "shabu.jpg")
b6.photos.attach(io: f36, filename: "shabu1.jpg")
b6.photos.attach(io: f37, filename: "shabu2.jpg")
b6.photos.attach(io: f38, filename: "shabu3.jpg")
b6.photos.attach(io: f39, filename: "shabu4.jpg")
b6.photos.attach(io: f40, filename: "shabu5.jpg")

b7.photos.attach(io: f41, filename: "sushi.jpg")
b7.photos.attach(io: f42, filename: "sushi1.jpg")
b7.photos.attach(io: f43, filename: "sushi2.jpg")
b7.photos.attach(io: f44, filename: "sushi3.jpg")
b7.photos.attach(io: f45, filename: "sushi4.jpg")
b7.photos.attach(io: f46, filename: "sushi5.jpg")
b7.photos.attach(io: f47, filename: "uni.jpg")

b8.photos.attach(io: f48, filename: "oko.jpg")
b8.photos.attach(io: f49, filename: "temp1.jpg")
b8.photos.attach(io: f50, filename: "temp2.jpg")
b8.photos.attach(io: f51, filename: "temp3.jpg")
b8.photos.attach(io: f52, filename: "temp4.jpg")
b8.photos.attach(io: f53, filename: "temp5.jpg")
b8.photos.attach(io: f54, filename: "temp6.jpg")

b9.photos.attach(io: f55, filename: "udon1.jpg")
b9.photos.attach(io: f56, filename: "udon2.jpg")
b9.photos.attach(io: f57, filename: "udon3.jpg")
b9.photos.attach(io: f58, filename: "udon4.jpg")
b9.photos.attach(io: f59, filename: "udon5.jpg")
b9.photos.attach(io: f60, filename: "udon6.jpg")

b10.photos.attach(io: f61, filename: "dessert1.jpg")
b10.photos.attach(io: f62, filename: "dessert2.jpg")
b10.photos.attach(io: f63, filename: "dessert3.jpg")
b10.photos.attach(io: f64, filename: "dessert4.jpg")
b10.photos.attach(io: f65, filename: "dessert5.jpg")
b10.photos.attach(io: f66, filename: "dessert6.jpg")


b1.save!
b2.save!
b3.save!
b4.save!
b5.save!
b6.save!
b7.save!
b8.save!
b9.save!
b10.save!

cuisine1 = Cuisine.create(cuisine_type: "Barbecue")
cuisine2 = Cuisine.create(cuisine_type: "Sushi")
cuisine3 = Cuisine.create(cuisine_type: "Soup")
cuisine4 = Cuisine.create(cuisine_type: "Shabu")
cuisine5 = Cuisine.create(cuisine_type: "Dessert")
cuisine6 = Cuisine.create(cuisine_type: "Seafood")

bc1 = BusinessCuisine.create(cuisine_id: cuisine1.id, business_id: b1.id)
bc2 = BusinessCuisine.create(cuisine_id: cuisine1.id, business_id: b2.id)
bc3 = BusinessCuisine.create(cuisine_id: cuisine2.id, business_id: b3.id)
bc3 = BusinessCuisine.create(cuisine_id: cuisine2.id, business_id: b7.id)
bc4 = BusinessCuisine.create(cuisine_id: cuisine3.id, business_id: b5.id)
bc5 = BusinessCuisine.create(cuisine_id: cuisine3.id, business_id: b6.id)
bc6 = BusinessCuisine.create(cuisine_id: cuisine3.id, business_id: b9.id)
bc7 = BusinessCuisine.create(cuisine_id: cuisine4.id, business_id: b6.id)
bc8 = BusinessCuisine.create(cuisine_id: cuisine5.id, business_id: b10.id)
bc9 = BusinessCuisine.create(cuisine_id: cuisine6.id, business_id: b8.id)
bc10 = BusinessCuisine.create(cuisine_id: cuisine6.id, business_id: b7.id)
bc11 = BusinessCuisine.create(cuisine_id: cuisine6.id, business_id: b4.id)
bc12 = BusinessCuisine.create(cuisine_id: cuisine6.id, business_id: b3.id)
bc13 = BusinessCuisine.create(cuisine_id: cuisine6.id, business_id: b1.id)