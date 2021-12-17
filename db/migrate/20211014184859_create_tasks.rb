class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :details
      t.belongs_to :work_history, null: false, foreign_key: true

      t.timestamps
    end
  end
end
