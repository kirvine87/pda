require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')

class CardTest < MiniTest::Test

  def setup()
    @card = Card.new("Hearts", 5)
  end

  def test_get_card_suit()
    assert_equal("Hearts", @card.suit)
  end

  def test_get_card_value()
    assert_equal(5, @card.value)
  end

end
