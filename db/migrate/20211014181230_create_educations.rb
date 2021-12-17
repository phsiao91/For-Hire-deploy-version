class CreateEducations < ActiveRecord::Migration[6.1]
  def change
    create_table :educations do |t|
      t.string :school
      t.string :degree
      t.date :start_date
      t.date :end_date
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
