require 'pg'

conn = PG.connect( dbname: 'world' )

# conn.exec( "SELECT * FROM country" ) do |result|
#    result.each do |row|
#     puts row["code"]

    conn.exec("INSERT INTO country VALUES ('XXX','Sexhualshokolate','Asia','Asia',652090,1969,22720000,69,5976.00,69,'Afqanestan','Asia','Mike Hunt',1,'XX')") do |results|
    end

    conn.exec("INSERT INTO country(name,code) VALUE('westero', 'wes'") do |result|
    end
    conn.exec("DELETE FROM contry WHERE code = 'USA'") do |result|
      puts result.inspect
    end
    conn.exec("SELECT SUM(surfacearea) FROM country") do |result|
      land = result["sum"]
      total = 197000000

      percent =land/total

  end
#       conn.exec("UPDATE country SET name = 'America' WHERE name ='United States'") do |results|
# end

# add a country to the country table
# get teh  total surface of the area of earth
#update the name of the 'United States' 'America'
#delete a count from the country table

