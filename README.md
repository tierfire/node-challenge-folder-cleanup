# Folder Cleanup
> Your task is to tidy up this large set of directories containing (presumably) photos. The objective is take the flat structure and make it into a folder hierarchy with the following design:


```sh
photos/
├── 2016
│   ├── 01
│   │   ├── 01
│   │   ├── 01-3
│   │   └── 02
│   ├── 02
│   │   └── 01
│   └── 03
│       ├── 01
│       ├── 01-3
│       └── 02
├── 2017
└── 2018

```

1. Unpack the provided tarball of directories.
2. Use `node` to write a script which transforms the flat direcotry strcuture into a hierarchy.
3. Don't keep anything with `Copy -`.
4. Days with labels or tags should be placed in the month folder they belong to.

