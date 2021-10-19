class Api::MessagesController < ApiController
  def index
    @greetings = Message.all
    render json: { greetings: @greetings }
  end
end