create table stops(stop_id TEXT PRIMARY KEY,stop_code TEXT,stop_name TEXT,
                   stop_desc TEXT,stop_lat REAL,stop_lon REAL,
                   zone_id NUMERIC,stop_url TEXT, location_type TEXT, parent_station TEXT);
create table stop_times(trip_id TEXT,arrival_time TEXT,departure_time TEXT,
                        stop_id TEXT,stop_sequence NUMERIC,stop_headsign TEXT,
                        pickup_type NUMERIC,drop_off_type NUMERIC,shape_dist_traveled REAL);
						
/*
create table agency(agency_id TEXT,agency_name TEXT,agency_url TEXT,
                    agency_timezone TEXT,agency_lang TEXT, agency_phone TEXT);
create table calendar_dates(service_id TEXT,date NUMERIC,exception_type NUMERIC);
create table routes(route_id TEXT,agency_id TEXT,route_short_name TEXT,
                    route_long_name TEXT,route_desc TEXT,route_type NUMERIC,
                    route_url TEXT,route_color TEXT,route_text_color TEXT);
create table shapes(shape_id TEXT,shape_pt_lat REAL,shape_pt_lon REAL,
                    shape_pt_sequence NUMERIC);
create table trips(route_id TEXT,service_id TEXT,trip_id TEXT,
                   trip_headsign TEXT,direction_id NUMERIC,
                   block_id TEXT,shape_id TEXT);*/
.separator ','
.import google_transit/stops.txt stops
.import google_transit/stop_times.txt stop_times
/*
.import /home/me/GTFS/agency.txt agency
.import /home/me/GTFS/calendar_dates.txt calendar_dates
.import /home/me/GTFS/routes.txt routes
.import /home/me/GTFS/shapes.txt shapes
.import /home/me/GTFS/trips.txt trips*/

/* this deletes the header title */
delete from stops where stop_id like 'stop_id';
delete from stop_times where trip_id like 'trip_id';
/*
delete from agency where agency_id like 'agency_id';
delete from calendar_dates where service_id like 'service_id';
delete from routes where route_id like 'route_id';
delete from shapes where shape_id like 'shape_id';
delete from trips where route_id like 'route_id';*/