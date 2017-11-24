function produceDrivingRange(blockRange)
{
  return function(first,last)
  {
    let distance = Math.abs(parseInt(first)-parseInt(last));
      if ( distance > blockRange )
      {
      return `${distance-blockRange } blocks out of range`;
      }
      else
       {
      return `within range by ${blockRange-distance}`;
      }
  }
}
function produceTipCalculator(tipPercent)
{
  return function(amount)
  {
    return (amount*tipPercent);
  }
}
