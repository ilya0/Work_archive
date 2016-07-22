class Student

attr_accessor :job, :age
attr_reader :name

  def initialize name,age,job
    @name = name
    @age = age
    @job = job

  end

def gets_older
  @age +=1

end

def changes_career new_job
  @job = new_job
  end

def says_hello
  "Hello"
end


end
