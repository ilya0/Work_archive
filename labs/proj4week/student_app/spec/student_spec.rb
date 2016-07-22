require "student"

describe Student do

describe "#initialize" do
  it "creates a student with a name" do
    student1 = Student.new("john", 100, "cat wrangler")
      expect(student1.name).to eq("john")

      end
   end



describe "#gets_older" do
  it "adds one to the student's age" do
    student1 = Student.new("john", 100, "cat wrangler")
    student1.gets_older
    expect(student1.age).to eq(101)
  end
end


describe "#changes_career"
it "change the job" do
    student1 = Student.new("john", 100, "cat wrangler")
    student1.changes_career("a job")
    expect(student1.job).not_to eq("cat wrangler")

  end

describe "#says_hello"
it "says hello" do
    student1 = Student.new("john", 100, "cat wrangler")
    expect(student1.says_hello).to eq("hello")

  end
end
