class User < ApplicationRecord
    has_many :bios, dependent: :destroy
    # has_many :tasks, dependent: :destroy
    has_many :work_histories, dependent: :destroy
    has_many :languages, dependent: :destroy
    has_many :introductions, dependent: :destroy
    has_many :educations, dependent: :destroy
    has_many :socials, dependent: :destroy
    has_many :hobbies, dependent: :destroy

    validates :username, presence: true, uniqueness: true
    has_secure_password
end
