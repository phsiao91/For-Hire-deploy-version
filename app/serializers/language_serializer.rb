class LanguageSerializer < ActiveModel::Serializer
  attributes :id, :expertise, :rating
  has_one :user
end
