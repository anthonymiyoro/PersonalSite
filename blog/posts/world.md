title: The World is calling
date: 2016-02-03
published: True

## Hello Blog Post

### There are some code snippets below:

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Ut euismod elementum augue sit amet faucibus. Proin et tristique massa.


    :::python
    def fibonacci( n ):

       if n == 0 or n == 1:  # base case
          return n
       else:

          two recursive calls
          return fibonacci( n - 1 ) + fibonacci( n - 2 )

    number = int( raw_input( "Enter an integer: " ) )

    if number > 0:
       result = fibonacci( number )
       print "Fibonacci(%d) = %d" % ( number, result )
    else:
       print "Cannot find the fibonacci of a negative number"



