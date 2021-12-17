class CreateMes < ActiveRecord::Migration[6.1]
  def change
    create_table :mes do |t|
      t.string :name

      t.timestamps
    end
  end
end
