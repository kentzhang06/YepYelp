# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
  owner_id: 2
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
  owner_id: 2
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
  owner_id: 3
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
  owner_id: 4
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
  owner_id: 5
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
  owner_id: 6
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
  owner_id: 7
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
  owner_id: 5
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
  owner_id: 1
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
  owner_id: 2
)

b1.photos.attach(io: File.open("../images/bbq/bbq1.jpg"), filename: "bbq1.jpg")
b1.photos.attach(io: File.open("../images/bbq/bbq2.jpg"), filename: "bbq2.jpg")
b1.photos.attach(io: File.open("../images/bbq/bbq3.jpg"), filename: "bbq3.jpg")
b1.photos.attach(io: File.open("../images/bbq/bbq4.jpg"), filename: "bbq4.jpg")
b1.photos.attach(io: File.open("../images/bbq/bbq5.jpg"), filename: "bbq5.jpg")
b1.photos.attach(io: File.open("../images/bbq/pork.jpg"), filename: "pork.jpg")
b1.photos.attach(io: File.open("../images/bbq/wagyu.jpg"), filename: "wagyu.jpg")

b2.photos.attach(io: File.open("../images/curry/curry.jpg"), filename: "curry.jpg")
b2.photos.attach(io: File.open("../images/curry/curry1.jpg"), filename: "curry1.jpg")
b2.photos.attach(io: File.open("../images/curry/curry2.jpg"), filename: "curry2.jpg")
b2.photos.attach(io: File.open("../images/curry/curry3.jpg"), filename: "curry3.jpg")
b2.photos.attach(io: File.open("../images/curry/curry4.jpg"), filename: "curry4.jpg")
b2.photos.attach(io: File.open("../images/curry/curry5.jpg"), filename: "curry5.jpg")
b2.photos.attach(io: File.open("../images/curry/curry6.jpg"), filename: "curry6.jpg")

b3.photos.attach(io: File.open("../images/fancy/akira.jpg"), filename: "akira.jpg")
b3.photos.attach(io: File.open("../images/fancy/fancy1.jpg"), filename: "fancy1.jpg")
b3.photos.attach(io: File.open("../images/fancy/fancy2.jpg"), filename: "fancy2.jpg")
b3.photos.attach(io: File.open("../images/fancy/fancy3.jpg"), filename: "fancy3.jpg")
b3.photos.attach(io: File.open("../images/fancy/fancy4.jpg"), filename: "fancy4.jpg")
b3.photos.attach(io: File.open("../images/fancy/fancy5.jpg"), filename: "fancy5.jpg")
b3.photos.attach(io: File.open("../images/fancy/izakaya.jpg"), filename: "izakaya.jpg")

b4.photos.attach(io: File.open("../images/fish/grilled-fish.jpg"), filename: "grilled-fish.jpg")
b4.photos.attach(io: File.open("../images/fish/hamachi.jpg"), filename: "hamachi.jpg")
b4.photos.attach(io: File.open("../images/fish/hotate.jpg"), filename: "hotate.jpg")
b4.photos.attach(io: File.open("../images/fish/oyster.jpg"), filename: "oyster.jpg")
b4.photos.attach(io: File.open("../images/fish/salmon.jpg"), filename: "salmon.jpg")
b4.photos.attach(io: File.open("../images/fish/sashimi.jpg"), filename: "sashimi.jpg")

b5.photos.attach(io: File.open("../images/ramen/bone-marrow-ramen.jpg"), filename: "bone-marrow-ramen.jpg")
b5.photos.attach(io: File.open("../images/ramen/appetizer.jpg"), filename: "appetizer.jpg")
b5.photos.attach(io: File.open("../images/ramen/gyoza.jpg"), filename: "gyoza.jpg")
b5.photos.attach(io: File.open("../images/ramen/ramen1.jpg"), filename: "ramen1.jpg")
b5.photos.attach(io: File.open("../images/ramen/ramen2.jpg"), filename: "ramen2.jpg")
b5.photos.attach(io: File.open("../images/ramen/ramen3.jpg"), filename: "ramen3.jpg")
b5.photos.attach(io: File.open("../images/ramen/ramen4.jpg"), filename: "ramen4.jpg")

b6.photos.attach(io: File.open("../images/shabu/shabu.jpg"), filename: "shabu.jpg")
b6.photos.attach(io: File.open("../images/shabu/shabu1.jpg"), filename: "shabu1.jpg")
b6.photos.attach(io: File.open("../images/shabu/shabu2.jpg"), filename: "shabu2.jpg")
b6.photos.attach(io: File.open("../images/shabu/shabu3.jpg"), filename: "shabu3.jpg")
b6.photos.attach(io: File.open("../images/shabu/shabu4.jpg"), filename: "shabu4.jpg")
b6.photos.attach(io: File.open("../images/shabu/shabu5.jpg"), filename: "shabu5.jpg")

b7.photos.attach(io: File.open("../images/sushi/sushi.jpg"), filename: "sushi.jpg")
b7.photos.attach(io: File.open("../images/sushi/sushi1.jpg"), filename: "sushi1.jpg")
b7.photos.attach(io: File.open("../images/sushi/sushi2.jpg"), filename: "sushi2.jpg")
b7.photos.attach(io: File.open("../images/sushi/sushi3.jpg"), filename: "sushi3.jpg")
b7.photos.attach(io: File.open("../images/sushi/sushi4.jpg"), filename: "sushi4.jpg")
b7.photos.attach(io: File.open("../images/sushi/sushi5.jpg"), filename: "sushi5.jpg")
b7.photos.attach(io: File.open("../images/sushi/uni.jpg"), filename: "uni.jpg")

b8.photos.attach(io: File.open("../images/tempura/oko.jpg"), filename: "oko.jpg")
b8.photos.attach(io: File.open("../images/tempura/temp1.jpg"), filename: "temp1.jpg")
b8.photos.attach(io: File.open("../images/tempura/temp2.jpg"), filename: "temp2.jpg")
b8.photos.attach(io: File.open("../images/tempura/temp3.jpg"), filename: "temp3.jpg")
b8.photos.attach(io: File.open("../images/tempura/temp4.jpg"), filename: "temp4.jpg")
b8.photos.attach(io: File.open("../images/tempura/temp5.jpg"), filename: "temp5.jpg")
b8.photos.attach(io: File.open("../images/tempura/temp6.jpg"), filename: "temp6.jpg")

b9.photos.attach(io: File.open("../images/udon/udon1.jpg"), filename: "udon1.jpg")
b9.photos.attach(io: File.open("../images/udon/udon2.jpg"), filename: "udon2.jpg")
b9.photos.attach(io: File.open("../images/udon/udon3.jpg"), filename: "udon3.jpg")
b9.photos.attach(io: File.open("../images/udon/udon4.jpg"), filename: "udon4.jpg")
b9.photos.attach(io: File.open("../images/udon/udon5.jpg"), filename: "udon5.jpg")
b9.photos.attach(io: File.open("../images/udon/udon6.jpg"), filename: "udon6.jpg")

b10.photos.attach(io: File.open("../images/dessert/dessert1.jpg"), filename: "dessert1.jpg")
b10.photos.attach(io: File.open("../images/dessert/dessert2.jpg"), filename: "dessert2.jpg")
b10.photos.attach(io: File.open("../images/dessert/dessert3.jpg"), filename: "dessert3.jpg")
b10.photos.attach(io: File.open("../images/dessert/dessert4.jpg"), filename: "dessert4.jpg")
b10.photos.attach(io: File.open("../images/dessert/dessert5.jpg"), filename: "dessert5.jpg")
b10.photos.attach(io: File.open("../images/dessert/dessert6.jpg"), filename: "dessert6.jpg")


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