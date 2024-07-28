const autosize = true;

const config = {
    width: 100,
    height: 200,
    ...(autosize ? { autosize: true, maxHeight: 300 } : {}),
    color: 'blue'
};

/*
 Resulting `config` object:
 {
     width: 100,
     height: 200,
     autosize: true,
     maxHeight: 300,
     color: 'blue'
 }
*/
