class WorkHistorySerializer < ActiveModel::Serializer
  attributes :id, :title, :company, :start_date, :end_date
  has_many :tasks
  # has_one :user
  # has_may :tasks
end
