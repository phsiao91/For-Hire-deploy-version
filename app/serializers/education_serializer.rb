class EducationSerializer < ActiveModel::Serializer
  attributes :id, :school, :degree, :start_date, :end_date
  has_one :user
end
