require 'test_helper'

class GreetingsControllerTest < ActionController::TestCase
  test "should get off_with_their" do
    get :off_with_their
    assert_response :success
  end

end
