class CreateSocials < ActiveRecord::Migration[6.1]
  def change
    create_table :socials do |t|
      t.string :facebook
      t.string :instagram
      t.string :twitter
      t.string :linkedin
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
