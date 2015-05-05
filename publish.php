<?php
set_time_limit(0);

ini_set('output_buffering', false);
ini_set('implicit_flush', 'true');

//exec('git pull 2>&1', $output);
exec('git add . 2>&1', $output);
exec('git commit -am "updated blog" 2>&1', $output);
exec('git push 2>&1', $output);

foreach($output as $line) {
  if (!trim($line)) continue;
  
  ob_flush();
  echo $line . '<br>';
  flush();
  sleep (1);
}  

echo '<hr>DONE!';