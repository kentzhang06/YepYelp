# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create(
  email: "example@d.com", 
  password: "demopass", 
  first_name: "Sasuke", 
  last_name: "Uchiha",
  zip_code: "99999"
)

u1 = User.create(
  email: "itachi@ninja.com", 
  password: "brother", 
  first_name: "Itachi", 
  last_name: "Uchiha",
  zip_code: "99999"
)

u2 = User.create(
  email: "kakashi@ninja.com", 
  password: "sharingan", 
  first_name: "Kakashi", 
  last_name: "Uchiha",
  zip_code: "99933"
)

u3 = User.create(
  email: "naruto@ninja.com", 
  password: "ninetail", 
  first_name: "Naruto", 
  last_name: "Uchiha",
  zip_code: "69999"
)

b1 = Business.create(
  name: 'The Rack',
  address: '123 Rock St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '90000',
  url: 'rack.com',
  owner_id: 3
)

b2 = Business.create(
  name: 'Kunai',
  address: '99 Post St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '90033',
  url: 'ninja.com',
  owner_id: 3
)

b3 = Business.create(
  name: 'Fallen Leaves',
  address: '123 California St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '94000',
  url: 'leaves.com',
  owner_id: 1
)

b4 = Business.create(
  name: 'Shurikens',
  address: '123 Sakura St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '90070',
  url: 'pink99.com',
  owner_id: 3
)

b5 = Business.create(
  name: 'The Home Ground',
  address: '123 Grass St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '90300',
  url: 'ground.com',
  owner_id: 2
)

b6 = Business.create(
  name: 'The Chunin Exam',
  address: '99 Home St.',
  city: 'San Francisco',
  state: 'CA',
  zip_code: '90500',
  url: 'rocklee.com',
  owner_id: 2
)

b2.photo.attach(io: File.open("../images/akira.jpg"), filename: "akira.jpg")
b2.save!