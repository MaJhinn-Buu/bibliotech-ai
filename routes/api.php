use App\Http\Controllers\GameAvailabilityController;
use Illuminate\Support\Facades\Route;

Route::get('/games', [GameAvailabilityController::class, 'index']);