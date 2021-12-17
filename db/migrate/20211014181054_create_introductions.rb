class CreateIntroductions < ActiveRecord::Migration[6.1]
  def change
    create_table :introductions do |t|
      t.string :summary
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
