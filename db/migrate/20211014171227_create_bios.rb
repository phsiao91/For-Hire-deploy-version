class CreateBios < ActiveRecord::Migration[6.1]
  def change
    create_table :bios do |t|
      t.string :image
      t.string :name
      t.string :address
      t.string :phone
      t.string :email
      t.string :github
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
