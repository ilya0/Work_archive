# Using a hash, add the details for a home.
# It is located at 123 Park Place, Monopoly, CA.
# It has 3 beds and 2 baths.
# It has the following features: fireplace, garage, and central A/C.
# It does not have a sprinkler system.
# The previous history of sales is as follows: sold on 9/14/08 for $700,000, sold on 1/25/03 for $400,000, and sold on 3/02/95 for $100,000.
# Check the number of bed in the home
# Check whether the home has a fireplace.
# Get the the last date the home was sold.
# Add a new sale date and price to the home's history: sold on 10/18/15 for $1,000,000


home = {
  :address => "123 park place"
  :city => "Monopoly"
  :beds => 2,
  :rooms => 3,
  :features => {
    :fireplace => true,
    :garage => true,
    :sprinkler_system => false,
    },
    :sales=>{
      { :date => "3/2/95", :price => 100000},
      {:date => "1/25/03", :price => 400000},
      {:date=>"9/14/08", :price => 70000}

    }
  }
}

home[:features][:garage]



