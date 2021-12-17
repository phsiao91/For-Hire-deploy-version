class BioSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :address, :phone, :email, :github
  has_one :user
end
