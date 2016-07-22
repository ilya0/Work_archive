Lover.destroy_all
LoveLetter.destroy_all

lover = Lover.create({name: "Romeo"})
love_letter = LoveLetter.create({message: "Girrrl"})

love_letter.lover_id = lover.id
love_letter.save

