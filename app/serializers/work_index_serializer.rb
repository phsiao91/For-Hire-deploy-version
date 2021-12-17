class WorkIndexSerializer < ActiveModel::Serializer
    attributes :id, :title, :company, :start_date, :end_date
    has_many :tasks
  end