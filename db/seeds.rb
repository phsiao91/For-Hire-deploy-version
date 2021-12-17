# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bio.destroy_all
WorkHistory.destroy_all
Task.destroy_all
User.destroy_all
Education.destroy_all
Introduction.destroy_all
Language.destroy_all
Social.destroy_all
User.destroy_all
Hobby.destroy_all

puts "seeding users"

u1 = User.create(username: "Rayden", password: "12345")


puts "seeding bios"

b1 = Bio.create(image: "https://www.irishtimes.com/polopoly_fs/1.4243834.1588439586!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg", name: "Ray", address: "Niagra Falls", phone: "12345", email: "rayden.com", github: "earthrealm.com", user_id: u1.id)

w1 = WorkHistory.create(title: "Manager", company:"Flatiron", start_date: Date.new(2019,06,21), end_date: Date.new(2020,05,05), user_id: u1.id )

t1 = Task.create(details: "Got lit!!!!!", work_history_id: w1.id)

e1 = Education.create(school: "Flatiron", degree: "Software Engineering", start_date: Date.new(2019,06,21), end_date: Date.new(2020,05,05), user_id: u1.id ) 

h1 = Hobby.create(description: "Football", user_id: u1.id )

i1 = Introduction.create(summary: "Dynamic software engineer", user_id: u1.id)

l1 = Language.create(expertise: "HTML", rating: "70", user_id: u1.id)

l2 = Language.create(expertise: "React", rating: "80", user_id: u1.id)

s1 = Social.create(facebook: "ray.com", instagram: "ig.com", twitter: "tweet", linkedin: "booya.com", user_id: u1.id)




puts "done seeding ✅"