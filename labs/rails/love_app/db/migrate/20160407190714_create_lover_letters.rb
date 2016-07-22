class CreateLoverLetters < ActiveRecord::Migration
  def change
    create_table :lover_letters do |t|
      t.string :message

      t.timestamps null: false
    end
  end
end
