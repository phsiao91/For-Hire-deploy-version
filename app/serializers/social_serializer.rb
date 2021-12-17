class SocialSerializer < ActiveModel::Serializer
  attributes :id, :facebook, :instagram, :twitter, :linkedin
  has_one :user
end
