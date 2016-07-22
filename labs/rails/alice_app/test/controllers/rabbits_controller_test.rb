require 'test_helper'

class RabbitsControllerTest < ActionController::TestCase
  test "should get rabbit_hole" do
    get :rabbit_hole
    assert_response :success
  end

end
