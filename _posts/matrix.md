---
layout: post
title: EFFICIENTLY WORKING WITH LEVENSHTEIN DISTANCE PROBLEMS USING PANDAS
date: 2017-11-01
---

Faced with the task of filling a distance matrix that checks for a combination of a column and row title in another column, the first iteration of an algorithm that did this had a Big O notation of n*n which means that with our 2800 rows, if each write took 1 second, it would take around 7,800,000 seconds(about 90 days) to complete the task.


To hasten the process, we can use a combination of 2 different methods as documented below.

### REMOVE REPEAT WORDS

Words that are the same such as 'word1 word1' can be the first to be emmitted when running a loop as it may not be relevant to the data. This can be done with a simple string comparison in python as below inside the for loop.

```
for indexer, row in df_destination.items():
    for column in df_destination:
        bool_matrix = ((indexer != column)         
```


### REMOVE REVERSED WORDS

After the repeat words have been removed, we can remove the reversed words. These can be like how 'word1 word2' and 'word2 word1' produce the same results in a string search.

Checking for reversed words is actually a utilistion of the [handshake problem](http://mathworld.wolfram.com/HandshakeProblem.html) whose solution is as below:

```
(n*n-n)-n/2

```

This is very important as it leads to a reduction of around 55% in running time.



```
i = 0
for indexer, row in df_destination.items():
    print (indexer)
    print ('    ')
    i = i + 1
    for column in df_destination:
   
        bool_matrix = ((indexer != column) & ((i - df_destination.columns.get_loc(column)) < 0))    
        if bool_matrix == True:
```

Checking for repeat strings and reversed words produces a boolean while doing a string search produces a series.

You then need to check for the first word match in the series from which you can confirm that the word exists.

In the end, the entire loop came out as below:


```
# BUILD DISTANCE MATRIX
# Fill in the df_destination with combied words from row and column that appear in the english_title column of df_source_dropped
i = 0
# start by looping through rows and then columns
for indexer, row in df_destination.items():
    print (indexer)
    print ('    ')
    i = i + 1
    for column in df_destination:
        # Check for the same string repeated and for the words reversed
        bool_matrix = ((indexer != column) & ((i - df_destination.columns.get_loc(column)) < 0))    
        if bool_matrix == True:
         # Combine name of row with name of columns and search for it in df_source_dropped
            bool_series = (df_source_dropped["english_title"].str.contains(indexer, case=False, regex=True)) & (df_source_dropped["english_title"].str.contains(column, case=False, regex=True))
            for index_val, series_val in bool_series.iteritems():
                 # print EXISTS if the string is there and write 1 to the dataframe
                if series_val == True:
                    print ('!EXISTS!')
                    print ('    ')
                    df_destination.loc[indexer, column] = 1
            break
```

Once that is done we can decide to only write the successful matches as 1 and then fill in the blanks in later as below.

Removing the reversed strings alone reduces the work needed to be done by half which offers a great improvement on the time needed.

Thanks to Chris Orwas [blog](https://blackorwa.com/2015/05/11/the-handshake-problem/) for reference.


