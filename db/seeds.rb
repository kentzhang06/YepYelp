# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
BusinessCuisine.destroy_all
Review.destroy_all
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
  last_name: "Uzumaki",
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

uimg1 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/users/sasuke.png')
uimg2 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/users/itachi.jpeg')
uimg3 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/users/kakashi.jpeg')
uimg4 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/users/naruto.jpeg')
uimg5 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/users/sakura.png')
uimg6 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/users/shino.jpg')
uimg7 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/users/rocklee.jpg')
uimg8 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/users/hinata.png')

demo_user.photo.attach(io: uimg1, filename: "sasuke.png")
u1.photo.attach(io: uimg2, filename: "itachi.jpeg")
u2.photo.attach(io: uimg3, filename: "kakashi.jpeg")
u3.photo.attach(io: uimg4, filename: "naruto.jpeg")
u4.photo.attach(io: uimg5, filename: "sakura.png")
u5.photo.attach(io: uimg6, filename: "shino.jpg")
u6.photo.attach(io: uimg7, filename: "rocklee.jpg")
u7.photo.attach(io: uimg8, filename: "hinata.png")

demo_user.save!
u1.save!
u2.save!
u3.save!
u4.save!
u5.save!
u6.save!
u7.save!

b1 = Business.create(
  name: 'The Burning Sand',
  address: '301 Judah St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94122',
  url: 'racksofmeat.com',
  phone: '715-777-9999',
  price_range: 2,
  opening_hours: '9:30 AM - 11:00 PM',
  lat: 37.761942,
  long: -122.465707,
  owner_id: u2.id
)

b2 = Business.create(
  name: 'The Spicy Choji',
  address: '1290 Grove St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94117',
  url: 'thebigguy.com',
  phone: '515-888-9999',
  price_range: 1,
  opening_hours: '10:30 AM - 10:00 PM',
  lat: 37.776539,
  long: -122.437595,
  owner_id: u2.id
)

b3 = Business.create(
  name: 'The Hidden Leaf',
  address: '225 Taylor St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94102',
  url: 'hiddenleaves.com',
  phone: '215-333-9999',
  price_range: 3,
  opening_hours: '4:30 PM - 11:00 PM',
  lat: 37.784382,
  long: -122.410889,
  owner_id: u3.id
)

b4 = Business.create(
  name: 'The Spinning Shuriken',
  address: '65 Liberty St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94110',
  url: 'pink200.com',
  phone: '335-111-9999',
  price_range: 1,
  opening_hours: '5:30 AM - 7:00 PM',
  lat: 37.757163,
  long: -122.422178,
  owner_id: u4.id
)

b5 = Business.create(
  name: 'Iruka Ramen',
  address: '1300 Evans Ave',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94124',
  url: 'sensei123.com',
  phone: '115-773-9929',
  price_range: 3,
  opening_hours: '11:30 AM - 11:30 PM',
  lat: 37.741330,
  long: -122.381205,
  owner_id: u5.id
)

b6 = Business.create(
  name: 'The Chunin Exam',
  address: '585 Cordova St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94112',
  url: 'rocklee.com',
  phone: '555-999-9999',
  price_range: 2,
  opening_hours: '5:30 PM - 10:00 PM',
  lat: 37.708442,
  long: -122.433996,
  owner_id: u6.id
)

b7 = Business.create(
  name: 'The Hidden Mist',
  address: '62 Vernon St',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94132',
  url: 'misty99.com',
  phone: '555-999-0931',
  price_range: 3,
  opening_hours: '2:30 PM - 10:00 PM',
  lat: 37.713587,
  long: -122.467875,
  owner_id: u7.id
)

b8 = Business.create(
  name: 'Fried Kimimaru',
  address: '201 S Delaware St',
  city: 'San Mateo',
  state: 'CA',
  zip_code: '94401',
  url: 'orochimaru.com',
  phone: '515-919-9191',
  price_range: 1,
  opening_hours: '11:30 AM - 8:00 PM',
  lat: 37.568537,
  long: -122.320616,
  owner_id: u5.id
)

b9 = Business.create(
  name: 'Uchiha Udon',
  address: '1315 Palm Ave',
  city: 'San Mateo',
  state: 'CA',
  zip_code: '94402',
  url: 'sharingan.com',
  phone: '585-900-9009',
  price_range: 2,
  opening_hours: '5:30 AM - 11:00 PM',
  lat: 37.556540,
  long: -122.315455,
  owner_id: u1.id
)

b10 = Business.create(
  name: 'Sweet Tsunade',
  address: '1537 Goody Ln',
  city: 'San Jose',
  state: 'CA',
  zip_code: '95131',
  url: 'thefifth.com',
  phone: '123-999-9446',
  price_range: 1,
  opening_hours: '6:30 PM - 2:00 AM',
  lat: 37.382987,
  long: -121.888696,
  owner_id: u2.id
)

b11 = Business.create(
  name: 'Eighth Gate',
  address: '1642 Ralene Ct',
  city: 'San Jose',
  state: 'CA',
  zip_code: '95131',
  url: 'theeighth.com',
  phone: '888-989-9486',
  price_range: 4,
  opening_hours: '8:30 AM - 8:00 PM',
  lat: 37.396877,
  long: -121.876459,
  owner_id: u5.id
)

b12 = Business.create(
  name: 'Shadow Clone',
  address: '920 Toyon Ave',
  city: 'San Jose',
  state: 'CA',
  zip_code: '95127',
  url: 'theinfiniteclones.com',
  phone: '123-999-9446',
  price_range: 4,
  opening_hours: '5:30 PM - 12:00 AM',
  lat: 37.391467,
  long: -121.833077,
  owner_id: u7.id
)

b13 = Business.create(
  name: 'The Chidori',
  address: '2350 Qume Dr',
  city: 'San Jose',
  state: 'CA',
  zip_code: '95131',
  url: 'loudmoves.com',
  phone: '780-996-6446',
  price_range: 4,
  opening_hours: '5:30 AM - 6:00 PM',
  lat: 37.397612,
  long: -121.885967,
  owner_id: u3.id
)

b14 = Business.create(
  name: 'The Rasengan',
  address: '2416 43rd Ave',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94116',
  url: 'rasenganmoves.com',
  phone: '110-116-6116',
  price_range: 4,
  opening_hours: '7:30 AM - 7:00 PM',
  lat: 37.741328,
  long: -122.501075,
  owner_id: u7.id
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

f67 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fusion/fusion1.jpg')
f68 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fusion/fusion2.jpg')
f69 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fusion/fusion3.jpg')
f70 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fusion/fusion4.jpg')
f71 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fusion/fusion5.jpg')
f72 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fusion/fusion6.jpg')
f73 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/fusion/fusion7.jpg')

f74 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/mochi/mochi1.jpg')
f75 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/mochi/mochi2.jpg')
f76 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/mochi/mochi3.jpg')
f77 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/mochi/mochi4.jpg')
f78 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/mochi/mochi5.jpg')
f79 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/mochi/mochi6.jpg')
f80 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/mochi/mochi7.jpg')

f81 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/rice/rice1.jpg')
f82 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/rice/rice2.jpg')
f83 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/rice/rice3.jpg')
f84 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/rice/rice4.jpg')
f85 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/rice/rice5.jpg')
f86 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/rice/rice6.jpg')

f87 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/tako/tako1.jpg')
f88 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/tako/tako2.jpg')
f89 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/tako/tako3.jpg')
f90 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/tako/tako4.jpg')
f91 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/tako/tako5.jpg')
f92 = open('https://aa-yelp-clone-pro.s3.us-west-1.amazonaws.com/tako/tako6.jpg')




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

b11.photos.attach(io: f67, filename: "fusion1.jpg")
b11.photos.attach(io: f68, filename: "fusion2.jpg")
b11.photos.attach(io: f69, filename: "fusion3.jpg")
b11.photos.attach(io: f70, filename: "fusion4.jpg")
b11.photos.attach(io: f71, filename: "fusion5.jpg")
b11.photos.attach(io: f72, filename: "fusion6.jpg")
b11.photos.attach(io: f73, filename: "fusion7.jpg")

b12.photos.attach(io: f74, filename: "mochi1.jpg")
b12.photos.attach(io: f75, filename: "mochi2.jpg")
b12.photos.attach(io: f76, filename: "mochi3.jpg")
b12.photos.attach(io: f77, filename: "mochi4.jpg")
b12.photos.attach(io: f78, filename: "mochi5.jpg")
b12.photos.attach(io: f79, filename: "mochi6.jpg")
b12.photos.attach(io: f80, filename: "mochi7.jpg")

b13.photos.attach(io: f81, filename: "rice1.jpg")
b13.photos.attach(io: f82, filename: "rice2.jpg")
b13.photos.attach(io: f83, filename: "rice3.jpg")
b13.photos.attach(io: f84, filename: "rice4.jpg")
b13.photos.attach(io: f85, filename: "rice5.jpg")
b13.photos.attach(io: f86, filename: "rice6.jpg")

b14.photos.attach(io: f87, filename: "tako1.jpg")
b14.photos.attach(io: f88, filename: "tako2.jpg")
b14.photos.attach(io: f89, filename: "tako3.jpg")
b14.photos.attach(io: f90, filename: "tako4.jpg")
b14.photos.attach(io: f91, filename: "tako5.jpg")
b14.photos.attach(io: f92, filename: "tako6.jpg")


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
b11.save!
b12.save!
b13.save!
b14.save!

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
bc14 = BusinessCuisine.create(cuisine_id: cuisine6.id, business_id: b11.id)
bc15 = BusinessCuisine.create(cuisine_id: cuisine1.id, business_id: b11.id)
bc16 = BusinessCuisine.create(cuisine_id: cuisine5.id, business_id: b12.id)
bc17 = BusinessCuisine.create(cuisine_id: cuisine1.id, business_id: b13.id)
bc18 = BusinessCuisine.create(cuisine_id: cuisine6.id, business_id: b13.id)
bc19 = BusinessCuisine.create(cuisine_id: cuisine2.id, business_id: b14.id)
bc20 = BusinessCuisine.create(cuisine_id: cuisine6.id, business_id: b14.id)

r1 = Review.create(
  body: "Will definitely come back! Great service",
  author_id: u1.id,
  business_id: b1.id,
  rating: 4
)
r2 = Review.create(
  body: "Food taste great",
  author_id: u2.id,
  business_id: b1.id,
  rating: 4
)
r3 = Review.create(
  body: "Found a hair in my food",
  author_id: u3.id,
  business_id: b1.id,
  rating: 2
)

r4 = Review.create(
  body: "Interesting food",
  author_id: u4.id,
  business_id: b2.id,
  rating: 4
)
r5 = Review.create(
  body: "Pretty chill here",
  author_id: u5.id,
  business_id: b2.id,
  rating: 5
)
r6 = Review.create(
  body: "Waitress yelled at me",
  author_id: u1.id,
  business_id: b2.id,
  rating: 1
)

r7 = Review.create(
  body: "Slipped on a banana",
  author_id: u2.id,
  business_id: b3.id,
  rating: 1
)
r8 = Review.create(
  body: "Great tasting appetizers",
  author_id: u5.id,
  business_id: b3.id,
  rating: 5
)
r9 = Review.create(
  body: "No clean plates for use",
  author_id: u7.id,
  business_id: b3.id,
  rating: 2
)

r10 = Review.create(
  body: "Food was too hot",
  author_id: u4.id,
  business_id: b4.id,
  rating: 3
)
r11 = Review.create(
  body: "Slime in the food",
  author_id: u6.id,
  business_id: b4.id,
  rating: 1
)
r12 = Review.create(
  body: "Bathroom smells like you know what",
  author_id: u2.id,
  business_id: b4.id,
  rating: 1
)

r13 = Review.create(
  body: "Cute waiter",
  author_id: u5.id,
  business_id: b5.id,
  rating: 4
)
r14 = Review.create(
  body: "Interesting choice of paintings",
  author_id: u3.id,
  business_id: b5.id,
  rating: 3
)
r15 = Review.create(
  body: "The ceiling is too high",
  author_id: u7.id,
  business_id: b5.id,
  rating: 3
)

r16 = Review.create(
  body: "The wait was too long man",
  author_id: u5.id,
  business_id: b6.id,
  rating: 1
)
r17 = Review.create(
  body: "No parking, drove around for hours",
  author_id: u6.id,
  business_id: b6.id,
  rating: 1
)
r18 = Review.create(
  body: "Excellent service, owner was very kind",
  author_id: u2.id,
  business_id: b6.id,
  rating: 5
)

r19 = Review.create(
  body: "Dude beat me up in the back",
  author_id: u1.id,
  business_id: b7.id,
  rating: 1
)
r20 = Review.create(
  body: "Awesome plating on the food",
  author_id: u7.id,
  business_id: b7.id,
  rating: 5
)
r21 = Review.create(
  body: "Charged me for napkins",
  author_id: u6.id,
  business_id: b7.id,
  rating: 2
)

r22 = Review.create(
  body: "Food too greasy",
  author_id: u5.id,
  business_id: b8.id,
  rating: 1
)
r23 = Review.create(
  body: "Mom's spaghetti",
  author_id: u2.id,
  business_id: b8.id,
  rating: 4
)
r24 = Review.create(
  body: "Palms are sweaty, knees weak, arms are...",
  author_id: u1.id,
  business_id: b8.id,
  rating: 3
)

r25 = Review.create(
  body: "Love the sour taste to the fish",
  author_id: u1.id,
  business_id: b9.id,
  rating: 5
)
r26 = Review.create(
  body: "A little bit too much sauce",
  author_id: u1.id,
  business_id: b9.id,
  rating: 3
)
r27 = Review.create(
  body: "AWESOME FOODDDDDDDD",
  author_id: u1.id,
  business_id: b9.id,
  rating: 5
)

r28 = Review.create(
  body: "Too sweetttt Aiyah",
  author_id: u6.id,
  business_id: b10.id,
  rating: 2
)
r29 = Review.create(
  body: "No Parking holy crappp",
  author_id: u3.id,
  business_id: b10.id,
  rating: 1
)
r30 = Review.create(
  body: "Drinks were perfect!",
  author_id: u6.id,
  business_id: b10.id,
  rating: 5
)

r31 = Review.create(
  body: "Tripped on the table",
  author_id: u4.id,
  business_id: b11.id,
  rating: 3
)
r32 = Review.create(
  body: "Broke my nose climbing the on the stove",
  author_id: u2.id,
  business_id: b11.id,
  rating: 2
)
r33 = Review.create(
  body: "Owner was mean to me",
  author_id: u6.id,
  business_id: b11.id,
  rating: 1
)

r34 = Review.create(
  body: "Smelly waiters",
  author_id: u1.id,
  business_id: b12.id,
  rating: 3
)
r35 = Review.create(
  body: "Lights too dim, way too dark inside",
  author_id: u5.id,
  business_id: b12.id,
  rating: 2
)
r36 = Review.create(
  body: "Had my first date here, have to say it didn't go too well, but food great",
  author_id: u7.id,
  business_id: b12.id,
  rating: 5
)

r37 = Review.create(
  body: "INCREDIBLE TASTING FOOD",
  author_id: u2.id,
  business_id: b13.id,
  rating: 5
)
r38 = Review.create(
  body: "YOU GUYS MUST COME HERE, EVERYTHING WAS GREAT",
  author_id: u3.id,
  business_id: b13.id,
  rating: 5
)
r39 = Review.create(
  body: "THE TV IS GREAT",
  author_id: u5.id,
  business_id: b13.id,
  rating: 5
)

r40 = Review.create(
  body: "The server poured cold water on my head",
  author_id: u1.id,
  business_id: b14.id,
  rating: 1
)
r41 = Review.create(
  body: "Portions were too small",
  author_id: u4.id,
  business_id: b14.id,
  rating: 2
)
r42 = Review.create(
  body: "The food was too cold",
  author_id: u6.id,
  business_id: b10.id,
  rating: 3
)

