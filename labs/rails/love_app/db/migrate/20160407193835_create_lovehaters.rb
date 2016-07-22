class CreateLovehaters < ActiveRecord::Migration
  def change
    create_table :lovehaters do |t|
      t.string :postname
      t.string :message

      t.timestamps null: false
    end
  end
end
