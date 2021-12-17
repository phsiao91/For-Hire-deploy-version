class TaskSerializer < ActiveModel::Serializer
  attributes :id, :details
  has_one :work_history
end
