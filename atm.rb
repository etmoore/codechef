puts "How much would you like to withdraw?"
withdrawal = gets.to_f.round(2)
puts "What is your current balance?"
balance = gets.to_f.round(2)

def atm(withdrawal, balance)
  fee = 0.5
  if (withdrawal + 0.5 > balance)
    puts sprintf('%.2f', balance)
  elsif (withdrawal % 5 == 0)
    balance -= (withdrawal + fee)
    puts sprintf('%.2f', balance)
  else
    puts sprintf('%.2f', balance)
  end
end

atm(withdrawal, balance)