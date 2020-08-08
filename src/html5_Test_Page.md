html5 Test Page
===============

Missing tags
------------

- input[file]
- input[keygen]
- <aside>
- <details>
- <summary>
- <div>
- <span>

Typo
----

for for

Removed unecessary div
----------------------

I know it's common practice to use a <div> to contain document (hello Boostrap users). 
We don't really need it here though, so I removed it to avoid one level of unnecessary nesting.

Table
-----

html code should appear in the same order which elements are rendered by browser in documents.
So I moved the <tfoot> section after the <tbody> section in <table>.
