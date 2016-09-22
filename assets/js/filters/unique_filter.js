// ----------------------------------------
// Unique Filter
// ----------------------------------------

Demo.filter('unique', function() {

  return function(collection) {
    // Container for unique items
    var uniqItems = [];

    // Loop through collection
    for (var i = 0; i < collection.length; i++) {

      // Get current item
      var item = collection[i];

      // Assume it is unique
      var isUnique = true;

      // Loop through all collected
      // unique items
      for (var j = 0; j < uniqItems.length; j++) {

        // Get the current unique item
        var uniqItem = uniqItems[j];

        // The item in the collection
        // is unique if it is NOT
        // found in the unique collection
        isUnique = (uniqItem !== item);

        // Break if we know it
        // is not unique
        if (!isUnique) {
          break;
        }
      }

      // If unique push onto
      // filtered collection
      if (isUnique) {
        uniqItems.push(item);
      }
    }

    // Return filtered collection
    return uniqItems;
  };

});




