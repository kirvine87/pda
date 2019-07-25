require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class CardGameTest < MiniTest::Test

  def setup()
    @card1 = Card.new("Ace", 1)
    @card2 = Card.new("Hearts", 10)
    @card_game = CardGame.new("Blackjack")

    @cards = [@card1, @card2]
  end

  def test_for_game_name()
    assert_equal("Blackjack", @card_game.name)
  end

  def test_check_for_ace()
    result = @card_game.check_for_ace(@card1)
    assert_equal(true, result)
  end

  def test_check_higher_card()
    input = @card_game.highest_card(@card1, @card2)
    assert_equal(@card2, input)
  end

  def test_self_cards_total()
    input = @card_game.self_cards_total(@cards)
    assert_equal("You have a total of 11", input)
  end

end
